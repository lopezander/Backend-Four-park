const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');
const path = require('path');

exports.generatePDFReport = (req, res) => {
    const doc = new PDFDocument();
    const filename = 'reporte.pdf';

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/pdf');

    doc.text('Este es un reporte en PDF.');
    doc.end();

    doc.pipe(res);
};

exports.generateExcelReport = async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');
    worksheet.columns = [
        { header: 'Columna 1', key: 'col1', width: 30 },
        { header: 'Columna 2', key: 'col2', width: 30 },
    ];

    worksheet.addRow({ col1: 'Dato 1', col2: 'Dato 2' });
    const filename = 'reporte.xlsx';

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    await workbook.xlsx.write(res);
    res.end();
};

exports.previewReport = (req, res) => {
    const data = {
        message: 'Este es un reporte de vista previa.'
    };
    res.render('preview', { data });
};
