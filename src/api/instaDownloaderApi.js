export const getInstagramPhotos = async (postUrl) => {
    try {
        const cleanUrl = postUrl.split('?')[0];
        
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(cleanUrl)}`;
        
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error("Connection failed");
        
        const data = await response.json();
        const html = data.contents;

        let photos = [];

        const ogImageRegex = /<meta property="og:image" content="([^"]+)"/i;
        const match = html.match(ogImageRegex);

        if (match && match[1]) {
            if (match[1].includes('instagram.com/static/') || match[1].includes('logo')) {
                throw new Error("Instagram is blocking the proxy. Try again.");
            }
            
            const cleanUrl = match[1].replace(/&amp;/g, '&');
            photos.push({ id: Date.now(), url: cleanUrl });
        }

        if (photos.length === 0) throw new Error("Private content or restricted");
        return photos;

    } catch (error) {
        console.error("Scraper Error:", error);
        throw error;
    }
};