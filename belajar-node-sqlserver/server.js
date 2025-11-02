const sql = require('mssql');

const config = {
  user: 'sa',               // ganti dengan user SQL Server kamu
  password: '123',        // password SQL Server kamu
  server: 'DESKTOP-LSTSC86\\SQLEXPRESS',      // nama server
  //server: 'localhost\SQLEXPRESS',      // nama server
  database: 'BelajarNode',  // nama database
  options: {
    trustServerCertificate: true,
    port: 1433
  }
};

async function testConnection() {
  try {
    await sql.connect(config);
    console.log('✅ Koneksi ke SQL Server berhasil!');
  } catch (err) {
    console.error('❌ Koneksi gagal:', err);
  } finally {
    sql.close();
  }
}

testConnection();