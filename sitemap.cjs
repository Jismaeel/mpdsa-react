(async () => {
  const { SitemapStream, streamToPromise } = await import("sitemap");
  const { createWriteStream } = await import("fs");
  const { Readable } = await import("stream");

  // Define your URLs here
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/member", changefreq: "monthly", priority: 0.8 },
    { url: "/SkylasDrivingSchool", changefreq: "monthly", priority: 0.7 },
    { url: "/CraigsDrivingSchool", changefreq: "monthly", priority: 0.7 },
    { url: "/QDrivingSchool", changefreq: "monthly", priority: 0.7 },
    { url: "/TwoliliesDrivingSchool", changefreq: "monthly", priority: 0.7 },
    { url: "/EddiesDrivingSchool", changefreq: "monthly", priority: 0.7 },
    { url: "/EbenezerDrivingSchool", changefreq: "monthly", priority: 0.7 },
    // Add more pages as needed
  ];

  // Create a sitemap stream and generate the sitemap
  const stream = new SitemapStream({ hostname: "https://mpdsa.online" });

  streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    createWriteStream("public/sitemap.xml").end(data);
  });
})();
