require('dotenv').config();
const nodemailer = require('nodemailer');
const fs = require('fs');

// 1. CONFIGURATION
// To prevent spam filters from blocking your Gmail, keep DAILY_LIMIT low (e.g., 20-30).
// MAX_DELAY and MIN_DELAY control the random wait time between emails (in milliseconds).
const DAILY_LIMIT = 25; 
const MIN_DELAY_MS = 5000; // 5 seconds
const MAX_DELAY_MS = 10000; // 10 seconds

// 2. HELPER: Random delay to simulate human sending behavior
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const getRandomDelay = () => Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS + 1)) + MIN_DELAY_MS;

async function runOutreach() {
  console.log('🚀 Starting Secure Local Outreach Agent...\n');

  // Load target list
  let targets = [];
  try {
    const data = fs.readFileSync('targets.json', 'utf8');
    targets = JSON.parse(data);
  } catch (err) {
    console.error('❌ Could not read targets.json. Please create it using targets.example.json as a template.');
    return;
  }

  // Filter out people we have already contacted
  const toContact = targets.filter(t => !t.contacted).slice(0, DAILY_LIMIT);

  if (toContact.length === 0) {
    console.log('✅ No new targets to contact today (or all targets have been contacted).');
    return;
  }

  console.log(`📨 Preparing to send ${toContact.length} emails. (Using random human-like delays)\n`);

  // Setup Gmail Transporter securely using App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, 
    },
  });

  // Verify connection configuration
  try {
    await transporter.verify();
    console.log('✅ Securely connected to Gmail SMTP server.\n');
  } catch (error) {
    console.error('❌ Authentication failed. Make sure you are using an "App Password" and your Gmail address is correct in the .env file.');
    console.error(error);
    return;
  }

  let successCount = 0;

  for (let i = 0; i < toContact.length; i++) {
    const target = toContact[i];
    
    // Simple, personalized HTML email template
    const mailOptions = {
      from: `"Calsi Tools" <${process.env.GMAIL_USER}>`,
      to: target.email,
      subject: `Quick resource for ${target.siteName} readers`,
      html: `
        <p>Hi ${target.name},</p>
        
        <p>I was reading your recent posts on ${target.siteName} and really enjoyed your breakdown on personal finance.</p>
        
        <p>I noticed you sometimes write about investing and loans but don't have interactive calculators for your readers to use. I recently built a completely free, ad-free set of financial calculators (SIP, EMI, PPF, etc.) at Calsi.in.</p>
        
        <p>I actually created a neat embed widget for it. You can just paste a 1-line HTML iframe into any of your articles, and it will load a clean, fast calculator right on your page for your readers.</p>
        
        <p>You can grab the embed codes here: <a href="https://calsi.in">https://calsi.in</a> (just click the '< >' button on any calculator).</p>

        <p>Let me know if you need any help setting it up on your site!</p>

        <p>Best regards,<br>
        Arjit<br>
        Founder, Calsi.in</p>
      `
    };

    try {
      console.log(`[${i + 1}/${toContact.length}] Sending email to ${target.name} (${target.email})...`);
      await transporter.sendMail(mailOptions);
      
      // Mark as contacted in the array
      target.contacted = true;
      successCount++;
      
      console.log(`   ✅ Sent successfully!`);
      
      // If there are more emails, wait a random amount of time before sending the next one
      if (i < toContact.length - 1) {
        const delay = getRandomDelay();
        console.log(`   ⏳ Waiting ${Math.round(delay / 1000)} seconds before next email to avoid spam filters...\n`);
        await wait(delay);
      }

    } catch (err) {
      console.error(`   ❌ Failed to send to ${target.email}:`, err.message);
    }
  }

  // Save the updated targets back to the JSON file so we don't email them again tomorrow
  try {
    fs.writeFileSync('targets.json', JSON.stringify(targets, null, 2));
    console.log(`\n💾 Updated targets.json with contacted status.`);
  } catch (err) {
    console.error('Could not save targets.json state:', err);
  }

  console.log(`\n🎉 Outreach batch complete! Successfully sent ${successCount} emails.`);
}

runOutreach();
