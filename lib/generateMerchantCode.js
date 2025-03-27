export function generateMerchantCode(fullName) {
    if (!fullName.trim()) return "";

    // Extract initials from full name
    const nameParts = fullName.trim().split(/\s+/);
    const initials = nameParts.map(word => word[0].toUpperCase()).join("");

    // Get current timestamp (YYYYDDMMHHMMSS)
    const now = new Date();
    const timestamp = `${now.getFullYear()}${String(now.getDate()).padStart(2, '0')}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;

    // Construct the final code
    return `EMKT-${initials}-${timestamp}`;
}

