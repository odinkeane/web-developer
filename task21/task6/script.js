
// Хранение данных в массивах (без объектов)
const subjects = []; // Массив названий предметов
const grades = [];    // Массив оценок
const ids = [];       // Массив уникальных идентификаторов

// DOM элементы
const subjectInput = document.getElementById('subject-input');
const gradeInput = document.getElementById('grade-input');
const addBtn = document.getElementById('add-btn');
const gradesList = document.getElementById('grades-list');
const averageGradeSpan = document.getElementById('average-grade');
const studentStatusSpan = document.getElementById('student-status');
const gradeChart = document.getElementById('grade-chart');

// Инициализация
renderGrades();
updateResults();

// Обработчики событий
addBtn.addEventListener('click', addGrade);
gradeInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addGrade();
});

// Функции

function addGrade() {
    const subject = subjectInput.value.trim();
    const grade = parseInt(gradeInput.value);

    if (subject && grade >= 1 && grade <= 5) {
        const id = Date.now();
        ids.push(id);
        subjects.push(subject);
        grades.push(grade);

        subjectInput.value = '';
        gradeInput.value = '';

        renderGrades();
        updateResults();
    }
}

function renderGrades() {
    gradesList.innerHTML = '';

    if (subjects.length === 0) {
        gradesList.innerHTML = '<li>Нет добавленных предметов</li>';
        return;
    }

    for (let i = 0; i < subjects.length; i++) {
        const li = document.createElement('li');
        li.dataset.id = ids[i];

        const subjectSpan = document.createElement('span');
        subjectSpan.textContent = `${subjects[i]}: `;
        subjectSpan.className = 'subject-name';

        const gradeSpan = document.createElement('span');
        gradeSpan.textContent = grades[i];
        gradeSpan.className = `grade-${grades[i]}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => deleteGrade(i));

        li.append(subjectSpan, gradeSpan, deleteBtn);
        gradesList.appendChild(li);
    }
}

function deleteGrade(index) {
    subjects.splice(index, 1);
    grades.splice(index, 1);
    ids.splice(index, 1);
    renderGrades();
    updateResults();
}

function updateResults() {
    if (grades.length === 0) {
        averageGradeSpan.textContent = '0';
        studentStatusSpan.textContent = '-';
        gradeChart.innerHTML = '';
        return;
    }

    // Расчет средней оценки
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const average = sum / grades.length;
    averageGradeSpan.textContent = average.toFixed(2);

    // Определение статуса
    let status;
    if (average >= 4.5) {
        status = 'Отличник';
    } else if (average >= 3.5) {
        status = 'Хорошист';
    } else if (average >= 2.5) {
        status = 'Троечник';
    } else {
        status = 'Двоечник';
    }
    studentStatusSpan.textContent = status;

    // Визуализация оценок
    renderGradeChart();
}

function renderGradeChart() {
    gradeChart.innerHTML = '';

    // Подсчет количества каждой оценки
    const gradeCounts = [0, 0, 0, 0, 0]; // Индексы 0-4 соответствуют оценкам 1-5
    for (const grade of grades) {
        gradeCounts[grade - 1]++;
    }

    // Создание диаграммы
    for (let i = 0; i < gradeCounts.length; i++) {
        const gradeValue = i + 1;
        const count = gradeCounts[i];

        if (count > 0) {
            const barContainer = document.createElement('div');
            barContainer.className = 'chart-bar-container';

            const gradeLabel = document.createElement('span');
            gradeLabel.textContent = gradeValue;
            gradeLabel.className = 'grade-label';

            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.width = `${(count / grades.length) * 100}%`;
            bar.style.backgroundColor = getGradeColor(gradeValue);

            const countLabel = document.createElement('span');
            countLabel.textContent = count;
            countLabel.className = 'count-label';

            barContainer.append(gradeLabel, bar, countLabel);
            gradeChart.appendChild(barContainer);
        }
    }
}

function getGradeColor(grade) {
    const colors = [
        '#ff4444', // 1 - красный
        '#ffbb33', // 2 - оранжевый
        '#ffdd33', // 3 - желтый
        '#99cc00', // 4 - зеленый
        '#00c851'  // 5 - темно-зеленый
    ];
    return colors[grade - 1];
}
