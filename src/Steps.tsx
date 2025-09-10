import { Text } from './Text.tsx';
import { StopStep } from './StopStep.tsx';

export const Steps = [
  <Text>So cool. I love pink. Happy now ?</Text>,
  <Text>There is nothing more to do here. You can go now.</Text>,
  <Text>
    Ah yeah okay I got it. It told you that there is nothing more to do here so
    you think that there is something else to do.
    <br /> No, trust me.
  </Text>,
  <Text>Told you, nothing more to do here.</Text>,
  <Text>Again... nothing more here.</Text>,
  <Text>Nothing. More. Here.</Text>,
  <Text sx={{ fontWeight: 'bold' }}>Nothing. More. Here.</Text>,
  <Text sx={{ fontWeight: 'bold', color: 'red' }}>Nothing. More. Here.</Text>,
  <Text sx={{ fontWeight: 'bold', color: 'red', fontSize: '30px' }}>
    Nothing. More. Here.
  </Text>,
  <Text
    sx={{
      fontWeight: 'bold',
      color: 'red',
      fontSize: '30px',
      animation: 'vibrate .1s infinite alternate',
    }}
  >
    Nothing. More. Here.
  </Text>,
  <Text
    sx={{
      fontWeight: 'bold',
      color: 'red',
      fontSize: '30px',
      animation: 'vibrate .1s infinite alternate',
    }}
  >
    Nothing. More. Here.
  </Text>,
  <Text
    sx={{
      fontWeight: 'bold',
      color: 'red',
      fontSize: '30px',
      animation: 'vibrate .1s infinite alternate',
    }}
  >
    Nothing. More. Here.
  </Text>,
  <StopStep />,
  <Text>Alright, alright... CONGRATULATIONS! You discovered the secret.</Text>,
  <Text>There is no secret.</Text>,
  <Text>There is no secret.</Text>,
  <Text>There is no secret.</Text>,
  <Text>There is no secret.</Text>,
  <Text>There is no secret.</Text>,
  <Text>There is no secret.</Text>,
  <Text>There is no secret.</Text>,
];

