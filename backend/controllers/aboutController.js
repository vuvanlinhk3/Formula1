exports.processAboutData = (req, res) => {
    const inputData = req.body.inputData;
    
    // Xử lý dữ liệu (ví dụ: đảo ngược chuỗi)
    const processedData = inputData.split('').reverse().join('');
    
    // Trả về dữ liệu đã xử lý
    res.json({ processedData });
  };
  