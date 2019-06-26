import Sheep from './Sheep';

export default () => {
  const sheep: Sheep = new Sheep('Dolly', 'Black');
  const clonedSheep = <Sheep>sheep.clone();
  console.log(clonedSheep.getColor());
  console.log(clonedSheep.getName());
};
