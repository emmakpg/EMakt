

export function generateCouponCode(name, expiryDate) {
    if (!name || !expiryDate) {
        return "COUPONCODE-010100";
    }

    // Convert name to uppercase and remove spaces
    const formattedName = name.replace(/\s+/g, "").toUpperCase();

    // Format expiry date (YYYY-MM-DD) → DDMMYY
    const dateParts = expiryDate.split("-");
    if (dateParts.length !== 3) {
        return "INVALID-DATE";
    }
    const formattedDate = `${dateParts[2]}${dateParts[1]}${dateParts[0].slice(-2)}`;

    return `${formattedName}-${formattedDate}`;
}




