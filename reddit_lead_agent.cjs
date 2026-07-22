const https = require('https');

// The subreddits we want to monitor for financial questions
const subreddits = ['IndiaInvestments', 'personalfinanceindia'];

// Keywords that indicate someone might need our calculators
const keywords = ['sip', 'emi', 'loan', 'tax', 'mutual fund', 'fd', 'return', 'calculator'];

// Custom User-Agent is strictly required by Reddit to avoid 429 Too Many Requests
const options = {
  headers: {
    'User-Agent': 'Calsi.in Lead Generation Agent v1.0 (by /u/calsi_app)'
  }
};

console.log('🔍 Starting Calsi Reddit Listening Agent...');
console.log('Scanning for recent financial questions...\n');

subreddits.forEach(subreddit => {
  const url = `https://www.reddit.com/r/${subreddit}/new.json?limit=25`;

  https.get(url, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

      res.on('end', () => {
        if (res.statusCode !== 200) {
          console.error(`⚠️ Reddit API Error for r/${subreddit}: Status Code ${res.statusCode}`);
          console.error(`Response preview: ${data.substring(0, 200)}...`);
          return;
        }
        
        try {
          const json = JSON.parse(data);
          
          if (!json.data || !json.data.children) {
            console.log(`⚠️ Could not fetch data for r/${subreddit}. Reddit might be rate limiting.`);
            return;
          }

          const posts = json.data.children.map(child => child.data);
          const matches = [];

          posts.forEach(post => {
            const titleLower = post.title.toLowerCase();
            const textLower = (post.selftext || '').toLowerCase();
            
            // Check if it's a question OR contains our keywords
            const hasKeyword = keywords.some(kw => titleLower.includes(kw) || textLower.includes(kw));
            const isQuestion = titleLower.includes('?');

            if (hasKeyword || isQuestion) {
              matches.push(post);
            }
          });

          if (matches.length > 0) {
            console.log(`\n=== 🎯 FOUND ${matches.length} POTENTIAL LEADS IN r/${subreddit.toUpperCase()} ===\n`);
            
            matches.slice(0, 5).forEach((match, index) => {
              console.log(`${index + 1}. ${match.title}`);
              console.log(`   URL: https://www.reddit.com${match.permalink}`);
              console.log(`   Author: u/${match.author} | Upvotes: ${match.ups}`);
              console.log(`   Match Reason: Contains target financial keywords.`);
              console.log('--------------------------------------------------');
            });
          } else {
            console.log(`No immediate keyword matches found in the newest posts of r/${subreddit}.`);
          }

        } catch (e) {
          console.error(`Error parsing Reddit response for r/${subreddit}:`, e.message);
          console.error(`Response preview: ${data.substring(0, 200)}...`);
        }
      });
  }).on('error', (e) => {
    console.error(`HTTP Request failed for r/${subreddit}:`, e.message);
  });
});
