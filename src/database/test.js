const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Mikael Nilton',
        avatar: 'https://avatars2.githubusercontent.com/u/4081497?s=460&u=5aa1944d5e2c69718586a9a0d7e138eb75411ac7&v=4',
        whatsapp: '84998971665',
        bio: 'Professor de biologia'
    }

    classValue = {
        subject: 1,
        cost: '25'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // Todas as classes de um determinado proffy
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // Todas as classes de acordo com o dia da semana e horário
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)
})