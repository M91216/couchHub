function(doc) {
  if (doc._id.substr(0, 6) === "skater") {
    emit(doc._id, {
        "name"    : doc.name,
        "sponsor" : doc.sponsor,
        "model"   : doc.model,
        "type"    : doc.type,
        "origin"  : doc.origin
    });
  }
};