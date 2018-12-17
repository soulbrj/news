  const getmysqltopic = require('../modles/m_topic');

  // 首页展示
  exports.listuser = (req, res) => {

      getmysqltopic.getmysqlfunc(
        (err,data) => {
            if(err) {
              return  res.send({
                    code:500,
                    msg:"服务器出错了"
                })
            }

            res.render('index.html',{
                topics:data
            })

        }
      )
  }