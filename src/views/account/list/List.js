//昵称，个人介绍，个性地址
export default {
  data() {
    return {
      list: [{
        id: 1,
        name: '赛',
        url: 'qwe',
        intro: 'hello world',
      }, {
        id: 2,
        name: '冷',
        url: 'qwe',
        intro: 'hello world',
      }, {
        id: 3,
        name: '思',
        url: 'qwe',
        intro: 'hello world',
      }],
      fields: [{
        key: 'id',
        label: 'ID'
      }, {
        key: 'name',
        label: '昵称'
      }, {
        key: 'url',
        label: '地址'
      }, {
        key: 'intro',
        label: '介绍'
      }]

    }
  }
}
