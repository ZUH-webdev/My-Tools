
export const extractTweetId = (url) => {
  if (!url) return null;

  // Remove whitespace
  url = url.trim();

  // If it's just a number, return it
  if (/^\d+$/.test(url)) {
    return url;
  }

  // Patterns for different URL formats
  const patterns = [
    /(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/i,
    /(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/i,
    /status\/(\d+)/i,
    /\/(\d+)$/
  ];

  for (let pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      // Return the last captured group (tweet ID)
      return match[match.length - 1];
    }
  }

  return null;
};

export const formatNumber = (num) => {
  if (!num) return '0';
  
  const number = parseInt(num);
  
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};

export const formatTweetDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  // Time format (1:09 AM)
  const timeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  const time = date.toLocaleString('en-US', timeOptions);
  
  // Date format (Jan 29, 2026)
  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  const formattedDate = date.toLocaleString('en-US', dateOptions);
  
  return `${time} · ${formattedDate}`;
};

/**
 * Fetch tweet data from Twitter Syndication API
 * @param {string} tweetId - The tweet ID
 * @returns {Promise<Object>} Tweet data
 */
export const fetchTweetData = async (tweetId) => {
  if (!tweetId) {
    throw new Error('Tweet ID is required');
  }

  try {
    const apiUrl = `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&lang=en`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Tweet not found. It may be deleted or private.');
      }
      throw new Error(`Failed to fetch tweet: ${response.status}`);
    }

    const data = await response.json();
    
    // Parse and structure the data
    const tweetData = {
      id: data.id_str,
      text: data.text,
      createdAt: data.created_at,
      formattedDate: formatTweetDate(data.created_at),
      author: {
        name: data.user.name,
        username: data.user.screen_name,
        profileImage: data.user.profile_image_url_https.replace('_normal', '_400x400'), // Higher quality
        verified: data.user.verified || data.user.is_blue_verified || false,
        isBlueVerified: data.user.is_blue_verified || false
      },
      stats: {
        replies: data.reply_count || 0,
        retweets: data.retweet_count || 0,
        likes: data.favorite_count || 0,
        views: data.views?.count || 0,
        formattedReplies: formatNumber(data.reply_count || 0),
        formattedRetweets: formatNumber(data.retweet_count || 0),
        formattedLikes: formatNumber(data.favorite_count || 0)
      },
      media: data.photos || [],
      video: data.video || null,
      hasMedia: (data.photos && data.photos.length > 0) || data.video,
      lang: data.lang || 'en',
      url: `https://twitter.com/${data.user.screen_name}/status/${data.id_str}`
    };

    return tweetData;

  } catch (error) {
    console.error('Tweet fetch error:', error);
    throw error;
  }
};

/**
 * Main function to fetch tweet by URL
 * @param {string} tweetUrl - Tweet URL or ID
 * @returns {Promise<Object>} Parsed tweet data
 */
export const getTweetByUrl = async (tweetUrl) => {
  try {
    const tweetId = extractTweetId(tweetUrl);
    
    if (!tweetId) {
      throw new Error('Invalid tweet URL or ID');
    }

    const tweetData = await fetchTweetData(tweetId);
    return {
      success: true,
      data: tweetData,
      error: null
    };

  } catch (error) {
    return {
      success: false,
      data: null,
      error: error.message
    };
  }
};