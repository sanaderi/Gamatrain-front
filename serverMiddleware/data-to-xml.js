import axios from 'axios';

export default async (req, res, next) => {
    if (req.url.startsWith('/sitemap')) {
      // Example: Set content type to XML
      res.setHeader('Content-Type', 'application/xml');

      console.log("OK");

  
      // Replace this part with your actual data fetching logic
      const data = await fetchDataFromServer();
  
      // Convert your data to XML format
      const xmlData = convertDataToXML(data);
  
      // Send XML response
      res.end(xmlData);
    } else {
      next();
    }
  };
  
  async function fetchDataFromServer() {
    // Fetch paginated data from the third-party server
    const itemsPerPage = 100; // Adjust as per your pagination logic
    let currentPage = 1;
    let allData = [];



    // Fetch data for all pages
    while (true) {
      const response = await axios.get(
        `https://core.gamatrain.com/api/v1/search?type=question&page=${currentPage}&perpage=${itemsPerPage}`
      );
      const data = response.data.data.list;
      console.log(data);

      // Add fetched data to the array
      allData = [...allData, ...data];

      // Break the loop if no more data available
      // if (data.length < itemsPerPage) {
      if (currentPage > 10) {
        break;
      }

      delay(1000);

      currentPage++;
    }


    return allData;
  }
  
  function convertDataToXML(data) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    xml+=`<url>
    <loc>https://gamatrain.com/search?type=question</loc>
    <lastmod>2023-11-14 17:02:24</lastmod>
    <priority>1.00</priority>
    </url>`;
    data.forEach(item => { 
      xml += `<url>
          <loc>https://gamatrain.com/qa/${item.id}</loc>
          <lastmod>${item.up_date}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
      </url>`;
    });
    xml += '\n</urlset>';
    return xml;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  