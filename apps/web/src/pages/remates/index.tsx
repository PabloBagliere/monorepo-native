import { promises as fs } from 'fs';
import path from 'path';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FormHistrix, AtomicButton } from 'components-app-histrix';
import { Box, ScrollView, VStack } from 'native-base';

function Remates({
  fileContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ScrollView>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <VStack space={3} mt="5">
          <FormHistrix defaultValues={{}} dynamic={fileContent}>
            <AtomicButton onPress={onSubmit}> Ingresar </AtomicButton>
          </FormHistrix>
        </VStack>
      </Box>
    </ScrollView>
  );
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
