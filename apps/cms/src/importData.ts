import { exec } from "child_process";
import { dbConfig } from "./libs";

const inputFile = "./backup.sql";

const importDatabase = () => {
  const importCommand = `psql -h ${dbConfig.host} -U ${dbConfig.user} -p ${dbConfig.port} -d ${dbConfig.database} -f ${inputFile}`;

  exec(importCommand, { env: { PGPASSWORD: dbConfig.password } }, (error) => {
    if (error) {
      console.error(`Error executing psql: ${error.message}`);
      process.exit(1);
    }

    console.log(`Database successfully imported from ${inputFile}`);
    process.exit(0);
  });
};

importDatabase();
