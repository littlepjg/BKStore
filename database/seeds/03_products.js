
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          product_name: 'Samsung Galaxy A8 32GB RAM 4GB 5.6inch - Hãng phân phối chính thức',
          product_images: '//vn-test-11.slatic.net/original/37bbbc9c8bf093781e0708af287730a7.jpg,//vn-test-11.slatic.net/original/afb574d7faf084ab3052bf957b952787.jpg',
          unit: 'VNĐ',
          base_price: 7990000,
          description: 'Galaxy A8 là dòng điện thoại đầu tiên của Samsung sở hữu camera Selfie kép cùng bạn tạo nên những bức ảnh Selfie độc đáo. Camera sau 16MP ghi lại mọi khoảnh khắc sáng rõ ngay cả khi thiếu sáng. Chỉ cần nhấn nút chụp và thỏa sức tạo kiểu, bạn sẽ lưu giữ ngay những khoảnh khắc vui nhộn cùng với bạn bè.',
          quantity: 15,
          product_type_id: 1,
          provider_id: 2,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
        {
          id: 2,
          product_name: 'Laptop Dell Inspiron 7588 (N7588A) I7-8750H, VGA GTX 1050TI 4GB, 15.6", Win 10 - Hãng phân phối chính thức',
          product_images: '//vn-test-11.slatic.net/original/f45aa2d753f178483fb8a8240f9a21dd.jpg,//vn-test-11.slatic.net/original/569591d3d11f5c43892b074637b48468.jpg,//vn-test-11.slatic.net/original/7482ae5ca75265cd39f7500e5578df02.jpg,//vn-test-11.slatic.net/original/a5cbf01aef52e6426d0b938aa43542ae.jpg',
          unit: 'VNĐ',
          base_price: 30890000,
          description: 'Dell Inspiron 7588 (N7588A) I7-8750H là chiếc máy tính hướng tới phân khúc dành cho các bạn học sinh, sinh viên hay nhân viên văn phòng có thể dùng đồ họa – kỹ thuật hay chơi các tựa game giải trí. Máy có thiết kế hiện đại và được trang bị cấu hình Intel thế hệ thứ 8 cho khả năng xử lý phần mềm hay tối ưu điện năng tốt.',
          quantity: 15,
          product_type_id: 2,
          provider_id: 6,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now()
        },
      ]);
    });
};
