const fs = require('fs').promises;

async function doFileSystem() {
    try {
        // CREATE
        await fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8");
            console.log(`Dosya Oluşturuldu`);
        // READ
        const data = await fs.readFile("employees.json", "utf8");
            console.log(`Dosya Okundu: ${data}`);
        // UPDATE
        await fs.appendFile("employees.json", '\n{"name": "Employee 2 Name", "salary": 2500}', "utf8");
            console.log(`Dosya Güncellendi`);
        const updated = await fs.readFile("employees.json", "utf8");
        console.log(`Dosya Okundu: ${updated}`);
        // DELETE
        // await fs.unlink("employees.json");
        //     console.log(`Dosya Silindi`);
    } catch (error) {
        console.log(`Hata: ${error}`);
    }
}
doFileSystem()