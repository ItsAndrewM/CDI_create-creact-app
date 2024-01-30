export const setWithExpiry = (key, value, ttl) => {
  console.log(key);
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const removeCharsFromName = (name) => {
  if (name.includes("&#8217;")) {
    return name.replace(/&#8217;/g, "'");
  } else if (name.includes("&amp;") || name.includes("&#038;")) {
    if (name.includes("&amp;")) {
      return name.replace("&amp;", "&");
    } else if (name.includes("&#038;")) {
      return name.replace("&#038;", "&");
    }
  } else {
    return name;
  }
};
