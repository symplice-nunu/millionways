'use strict';
var dbConn = require('./../../config/db.config');
var News = function(news){
  this.Category     = news.Category;
  this.Level      = news.Level;
  this.Title          = news.Title;
  this.Headlines          = news.Headlines;
  this.Author   = news.Author;
  this.Time    = news.Time;
  this.Photo         = news.Photo;
  this.Content         = news.Content;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
News.create = function (newEmp, result) {
dbConn.query("INSERT INTO news set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
News.findById = function(id, result) {
  dbConn.query("SELECT * FROM news WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("Error:", err);
      result(err, null);
    } else {
      if (res.length === 0) {
        result(null, { message: 'News item not found' });
      } else {
        result(null, res);
      }
    }
  });
};
News.findAll = function(result) {
    dbConn.query("SELECT * FROM news", function(err, res) {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        if (res.length === 0) {
          result(null, { message: 'No news items found' });
        } else {
          console.log('news:', res);
          result(null, res);
        }
      }
    });
  };
News.update = function(id, news, result) {
    dbConn.query("UPDATE news SET Category=?,Level=?,Title=?,Headlines=?,Author=?,Time=?,Photo=?,Content=? WHERE id = ?", [news.Category, news.Level, news.Title, news.Headlines, news.Author, news.Time, news.Photo, news.Content, id], function(err, res) {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        if (res.affectedRows === 0) {
          result(null, { message: 'News item not found' });
        } else {
          result(null, res);
        }
      }
    });
  };
News.delete = function(id, result) {
    dbConn.query("DELETE FROM news WHERE id = ?", [id], function(err, res) {
      if (err) {
        console.log("Error:", err);
        result(err, null);
      } else {
        if (res.affectedRows === 0) {
          result(null, { message: 'News item not found' });
        } else {
          result(null, res);
        }
      }
    });
  };
module.exports= News;