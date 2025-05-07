// Import thư viện Chart.js
document.write('<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>');

// Khởi tạo biểu đồ khi trang web được tải
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo biểu đồ accuracy
    const accuracyChart = new Chart(document.getElementById('accuracy-chart'), {
        type: 'bar',
        data: {
            labels: ['SVM Tự Cài Đặt', 'SVM Thư Viện'],
            datasets: [{
                label: 'Độ Chính Xác',
                data: [0.95, 0.96], // Thay thế bằng dữ liệu thực tế
                backgroundColor: ['#2563eb', '#1e40af']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });

    // Xử lý form dự đoán
    const predictionForm = document.getElementById('prediction-form');
    const customSvmResult = document.getElementById('custom-svm-result');
    const libSvmResult = document.getElementById('lib-svm-result');

    predictionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Lấy giá trị từ form
        const formData = {
            radius_mean: parseFloat(document.getElementById('radius_mean').value),
            texture_mean: parseFloat(document.getElementById('texture_mean').value),
            perimeter_mean: parseFloat(document.getElementById('perimeter_mean').value)
        };

        // Giả lập kết quả dự đoán (thay thế bằng API call thực tế)
        setTimeout(() => {
            // Kết quả mô phỏng
            const customSvmPrediction = Math.random() > 0.5 ? 'Lành tính' : 'Ác tính';
            const libSvmPrediction = Math.random() > 0.5 ? 'Lành tính' : 'Ác tính';

            // Hiển thị kết quả
            customSvmResult.textContent = customSvmPrediction;
            customSvmResult.style.color = customSvmPrediction === 'Lành tính' ? '#059669' : '#dc2626';

            libSvmResult.textContent = libSvmPrediction;
            libSvmResult.style.color = libSvmPrediction === 'Lành tính' ? '#059669' : '#dc2626';
        }, 1000);
    });
});
