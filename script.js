function calculate() {
    const totalCost = document.getElementById('totalCost').value;
    const individualCost = totalCost / 5;
    const remainingCost = totalCost - individualCost;
    const originalCosts = { '이수혁': 10000, '이나영': 10000, '임승민': 12000, '정재웅': 2000 };
    const totalOriginalCost = 34000;
    const additionalCostPerPerson = (remainingCost - totalOriginalCost) / 4;

    const tbody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // 테이블 초기화

    // 김재우의 계산
    tbody.innerHTML += `<tr>
                            <td>김재우</td>
                            <td>-</td>
                            <td>${individualCost}</td>
                            <td>${individualCost}</td>
                        </tr>`;

    // 나머지 인원 계산
    for (const [name, cost] of Object.entries(originalCosts)) {
        const finalCost = cost + additionalCostPerPerson;
        tbody.innerHTML += `<tr>
                                <td>${name}</td>
                                <td>${cost}</td>
                                <td>${additionalCostPerPerson.toFixed(2)}</td>
                                <td>${finalCost.toFixed(2)}</td>
                            </tr>`;
    }
}
