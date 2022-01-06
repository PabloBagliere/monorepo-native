import { promises as fs } from 'fs';
import path from 'path';

import { GetStaticProps } from 'next';

function Remates({ fileContent }) {
  console.log(JSON.parse(fileContent));
  return <div>hola</div>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'estructura.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');

  return {
    props: {
      fileContent,
    },
  };
};

export default Remates;
