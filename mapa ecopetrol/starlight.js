const Discord = require('discord.js');
const ExcelJS = require('exceljs');
const fs = require('fs');

const client = new Discord.Client();
const prefix = '!';

function cargarBaseDeDatos(nombreArchivo) {
    try {
        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.readFile(nombreArchivo)
            .then(function(worksheet) {
                const worksheet = workbook.getWorksheet(1);
                const data = [];
                worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
                    data.push(row.values);
                });
                return data;
            });
    } catch (error) {
        console.error("Error al cargar la base de datos:", error);
        return null;
    }
}

function guardarBaseDeDatos(baseDeDatos, nombreArchivo) {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Datos');
        baseDeDatos.forEach(row => {
            worksheet.addRow(row);
        });
        workbook.xlsx.writeFile(nombreArchivo)
            .then(function() {
                console.log("Base de datos guardada correctamente.");
            });
    } catch (error) {
        console.error("Error al guardar la base de datos:", error);
    }
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'mostrar_base_de_datos') {
        const baseDeDatos = cargarBaseDeDatos('base_de_datos.xlsx');
        if (baseDeDatos) {
            const tabla = "```\n" + baseDeDatos.map(row => row.join('\t')).join('\n') + "\n```";
            message.channel.send(tabla);
        } else {
            message.channel.send("No se pudo cargar la base de datos.");
        }
    } else if (command === 'guardar_base_de_datos') {
        const baseDeDatos = [
        ];
        guardarBaseDeDatos(baseDeDatos, 'base_de_datos.xlsx');
    }
});

client.login("TOKEN");
