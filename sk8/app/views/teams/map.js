function(doc) {
  if (doc._id.substr(0, 4) === "team") {
    emit(doc._id, {
        "name"    : doc.name,
        "website" : doc.website
        
    });
  }
};