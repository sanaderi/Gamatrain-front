import axios from "axios";

export default async (req, res, next) => {
  const { url } = req;

  // Check if the request is for sitemap
  if (url.startsWith("/sitemap")) {
    // Example: Set content type to XML
    res.setHeader("Content-Type", "application/xml");

    // Extract the content type from the URL
    const contentType = url.substring(url.lastIndexOf("/") + 1);

    var xmlData = "";
    if (contentType != "sitemap") {
      // Fetch data based on content type
      const data = await fetchDataFromServer(contentType);

      // Convert data to XML format
      xmlData = convertDataToXML(data, contentType);
    } else {
      xmlData = generateDefaultSitemap();
    }

    // Send XML response
    res.end(xmlData);
  } else {
    next();
  }
};

async function fetchDataFromServer(contentType) {
  // Fetch paginated data from the third-party server
  const itemsPerPage = 50; // Adjust as per your pagination logic
  let currentPage = 1;
  let allData = [];
  let apiUrl;

  // Determine the API URL based on the content type
  switch (contentType) {
    case "paper":
      apiUrl = "https://core.gamatrain.com/api/v1/search?type=test"; // Adjust API URL for papers
      break;
    case "qa":
      apiUrl = "https://core.gamatrain.com/api/v1/search?type=question"; // Adjust API URL for qa
      break;
    case "multimedia":
      apiUrl = "https://core.gamatrain.com/api/v1/search?type=learnfiles"; // Adjust API URL for multimedia
      break;
    case "exam":
      apiUrl = "https://core.gamatrain.com/api/v1/search?type=azmoon"; // Adjust API URL for exam
      break;
    case "tutorial":
      apiUrl = "https://core.gamatrain.com/api/v1/search?type=dars"; // Adjust API URL for tutorial
      break;
    case "blog":
      apiUrl = "https://core.gamatrain.com/api/v1/blogs/search"; // Adjust API URL for blog
      break;
    default:
      // Return empty array for unknown content type
      return [];
  }

  // Fetch data for all pages
  while (true) {
    let finalUrl = `${apiUrl}&page=${currentPage}&perpage=${itemsPerPage}`;
    if (contentType == "blog")
      finalUrl = `${apiUrl}?page=${currentPage}&perpage=${itemsPerPage}`;
    const response = await axios.get(finalUrl);
    const data = response.data.data.list;
    // Add fetched data to the array
    allData = [...allData, ...data];

    // Break the loop if no more data available
    if (data.length < itemsPerPage) {
      // if (currentPage > 1000) {
      break;
    }

    delay(1000);

    currentPage++;
  }

  return allData;
}

function convertDataToXML(data, contentType) {
  let title = "";
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  data.forEach((item) => {
    title = item.title_url;
    if (contentType == "blog")
      title = item.title
        .trim()
        .replace(/ (?!$)/g, "-")
        .replace(/\//g, "-")
        .toLowerCase();
    xml += `<url>
            <loc>https://gamatrain.com/${contentType}/${item.id}/${title}</loc>
            <lastmod>${formatDate(item.up_date)}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>`;
  });
  xml += "\n</urlset>";
  return xml;
}

function generateDefaultSitemap() {
  const simpleUrls = [
    "https://gamatrain.com",
    "https://gamatrain.com/about-us",
    "https://gamatrain.com/services",
    "https://gamatrain.com/faq",
    "https://gamatrain.com/search?type=test",
    "https://gamatrain.com/search?type=learnfiles",
    "https://gamatrain.com/search?type=question",
    "https://gamatrain.com/search?type=azmoon",
    "https://gamatrain.com/search?type=dars",
    "https://gamatrain.com/blog",
    "https://gamatrain.com/school",
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  simpleUrls.forEach((url) => {
    xml += `<url>
          <loc>${url}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.5</priority>
      </url>`;
  });
  xml += "\n</urlset>";
  return xml;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
