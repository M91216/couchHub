function(doc) {
  if (doc._id.substr(0, 11) === "independent") {
    emit(doc._id, {
        "sponsor"    : doc.sponsor,
        "model"    : doc.model,
        "type"    : doc.type,
        "origin"    : doc.origin
        
    });
  }
};