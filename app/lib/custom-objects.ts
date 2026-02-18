/**
 * GoHighLevel Custom Objects API
 *
 * This module handles fetching custom object records from GHL.
 *
 * API Endpoint: POST /objects/{objectId}/records/search
 *
 * The endpoint requires:
 * - objectId: The ID of the custom object schema (e.g., "696728b034162f2acf590907")
 * - locationId: Your GHL location ID
 * - Pagination: page and pageLimit in the request body
 *
 * Response structure:
 * {
 *   "records": [
 *     {
 *       "id": "record-id",
 *       "objectKey": "custom_objects.name",
 *       "properties": {
 *         "name": "Value",
 *         "field_name": "Field value"
 *       }
 *     }
 *   ],
 *   "total": 1
 * }
 */

type CustomObjectRecord = {
  id: string;
  locationId: string;
  objectId: string;
  objectKey: string;
  properties: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    source: string;
    channel: string;
    sourceId: string;
    sourceName: string;
    createdAt: string;
  };
  lastUpdatedBy?: {
    sourceId: string;
    createdAt: string;
    channel: string;
    source: string;
    sourceName: string;
  };
  owners: unknown[];
  followers: unknown[];
  sort: unknown[];
  searchAfter: unknown[];
};

type CustomObjectRecordsResponse = {
  records: CustomObjectRecord[];
  total: number;
  traceId?: string;
};

/**
 * Fetches custom object records from GoHighLevel API
 *
 * @param objectId - Optional custom object schema ID. If not provided, uses:
 *   1. GHL_OBJECT_ID environment variable
 *   2. Defaults to "696728b034162f2acf590907" (the object ID we found working)
 *
 * @returns Promise with the API response containing records array and total count
 *
 * @example
 * ```typescript
 * const data = await getCustomObjectRecords();
 * console.log(data.records); // Array of custom object records
 * console.log(data.total);   // Total number of records
 * ```
 */
export async function getCustomObjectRecords(
  objectId?: string
): Promise<CustomObjectRecordsResponse> {
  // Get API credentials from environment variables
  const accessToken = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  // Validate required environment variables
  if (!accessToken) {
    throw new Error("GHL_API_KEY environment variable is not set");
  }

  if (!locationId) {
    throw new Error("GHL_LOCATION_ID environment variable is not set");
  }

  // Determine which objectId to use
  // Priority: 1) function parameter, 2) env variable, 3) default
  const objectIdToUse =
    objectId || process.env.GHL_OBJECT_ID || "696728b034162f2acf590907";

  // Construct the API endpoint URL
  // Format: POST /objects/{objectId}/records/search
  const url = `https://services.leadconnectorhq.com/objects/${objectIdToUse}/records/search`;

  console.log("🔍 Fetching custom objects from:", url);
  console.log("📍 Object ID:", objectIdToUse);
  console.log("📍 Location ID:", locationId);

  // Make the API request
  const res = await fetch(url, {
    method: "POST", // Must be POST, not GET
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Version: "2021-07-28", // GHL API version
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // Request body with locationId and pagination
    body: JSON.stringify({
      locationId,
      page: 1, // Start from page 1
      pageLimit: 100, // Get up to 100 records per page
    }),
    cache: "no-store", // Don't cache in Next.js
  });

  console.log("📡 Response status:", res.status, res.statusText);

  // Handle errors
  if (!res.ok) {
    const errorText = await res.text().catch(() => "Unknown error");
    console.error("❌ API Error:", errorText);
    throw new Error(
      `Failed to fetch GHL custom objects: ${res.status} ${res.statusText} - ${errorText}`
    );
  }

  // Parse the JSON response
  const data = (await res.json()) as CustomObjectRecordsResponse;
  console.log("✅ Custom objects response:", JSON.stringify(data, null, 2));
  console.log("📊 Records count:", data?.records?.length || 0);

  return data;
}

// Export types for use in other files
export type { CustomObjectRecord, CustomObjectRecordsResponse };
