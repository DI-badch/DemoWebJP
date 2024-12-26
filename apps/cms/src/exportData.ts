import { exec } from "child_process";
import { dbConfig } from "./libs";

const outputFile = "./backup.sql";

const dumpDatabase = () => {
  const dumpCommand = `pg_dump -h ${dbConfig.host} -U ${dbConfig.user} -p ${dbConfig.port} -d ${dbConfig.database} -f ${outputFile}`;

  exec(dumpCommand, { env: { PGPASSWORD: dbConfig.password } }, (error) => {
    if (error) {
      console.error(`Error executing pg_dump: ${error}`);
      process.exit(1);
    }
    console.log(`Database backup saved to ${outputFile}`);
    process.exit(0);
  });
};

dumpDatabase();
