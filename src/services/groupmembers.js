const SHEET_ID = "1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk";
const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}`;

export async function getMembers(sheetName) {
  try {
    const response = await fetch(`${BASE_URL}/${sheetName}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${sheetName}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching sheet:", error);
    return [];
  }
}