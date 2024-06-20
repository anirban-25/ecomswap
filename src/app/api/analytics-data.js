import { google } from 'googleapis';

export default async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/your-service-account-file.json',
    scopes: 'https://www.googleapis.com/auth/analytics.readonly',
  });

  const analytics = google.analyticsreporting({
    version: 'v4',
    auth: await auth.getClient(),
  });

  const response = await analytics.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: 'G-T6C8KG03Q6',
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          metrics: [{ expression: 'ga:pageviews' }],
          dimensions: [{ name: 'ga:date' }],
        },
      ],
    },
  });

  const data = response.data.reports[0].data.rows.map((row) => ({
    date: row.dimensions[0],
    pageViews: row.metrics[0].values[0],
  }));

  res.status(200).json(data);
};