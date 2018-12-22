  const m_topic = require('../modles/m_topic');

  // 首页展示
  exports.listuser = (req, res,next) => {

    m_topic.getmysqlfunc(
        (err,data) => {
            if(err) {
              return  next(err);
            }

            console.log(req.session.user);
           

            res.render('index.html',{
                topics:data,
                user: req.session.user
            })

        }
      )
  }

//   创建添加文章的功能

exports.sendtopic = (req, res,next) => {
    res.render('topic/create.html');
}


// 处理添加文章的表单数据
exports.sendform = (req, res,next) => {
    const body = req.body;
    // 将body添加到数据库  m-topic中处理


     // body.createdAt = new Date();
    //  body.createdAt = moment().format();

     // userId:用来区分每个文章的创建者是谁
     body.userId = req.session.user.id;


    m_topic.getmysqlart(body,(err,data)=> {
        if(err) {
            return next(err);
        }

        res.send({
            code:200,
            msg: '添加成功'
        })
    })
}





// 处理详情页面
exports.topicdetail = (req, res,next) => {

    const topicID = req.params.topicID;
    // console.log(topicID);

    // res.render('topic/show.html');

    m_topic.getmysqlfindID(topicID,(err,data)=> {

        if(err) {
            return  next(err);
        }

        res.render('topic/show.html',{
            topic:data[0],
            sessionUserId: req.session.user ? req.session.user.id : 0
        })

    
    })
  
}


// 实现删除的功能
exports.topicdelete = (req,res,next) => {
    // 获取所传过来的ID
    const topicID = req.params.topicID;

    m_topic.getmysqldelete(topicID,(err,data)=> {

        if(err) {
            return  next(err);
        }

        

        res.redirect('/');

    })

}


// 实现编辑的功能  首先实现编辑页的渲染
exports.topicedit = (req,res,next) => {
    const topicID = req.params.topicID;
    m_topic.getmysqlfindID(topicID,(err,data)=> {

        if(err) {
            return  next(err);
        }

        next(err)

        res.render('topic/edit.html',{
            topic:data[0],
        })
    
    })

}


// 修改编辑页
exports.topiceditgai = (req,res,next) => {
    // 获取所传过来的ID
    const topicID = req.params.topicID;
    // console.log(topicID);
    const body = req.body;

    m_topic.getmysqledit(body,topicID,(err,data)=> {


        // console.log(data);
        
        if(err) {
            return  next(err);
        }

       

        res.send({
            code:200,
            msg: '编辑成功'
        })

            // 异步操作处理表单要在前台页面

    })
}                                                               
