const headers = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    heading: "Heading 1",
    headingType: "Heading Type 1"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    heading: "Heading 2",
    headingType: "Heading Type 2"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    heading: "Heading 3",
    headingType: "Heading Type 3"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    heading: "Heading 4",
    headingType: "Heading Type 4"
  }
];

export function getHeaders() {
  return headers;
}

export function getHeader(id) {
  return headers.find(q => q._id === q);
}

export function saveHeader(header) {
  let headerInDb = headers.find(q => q._id === header._id) || {};
  headerInDb.heading = header.heading;
  headerInDb.headingType = header.mainHeading;

  if (!headerInDb._id) {
    headerInDb._id = Date.now().toString();
    headers.push(headerInDb);
  }

  return headerInDb;
}

export function deleteHeader(id) {
  let headerInDb = headers.find(q => q._id === id);
  headers.splice(headers.indexOf(headerInDb), 1);
  return headerInDb;
}
