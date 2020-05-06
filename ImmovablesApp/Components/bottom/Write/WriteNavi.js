import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import board from './Board'
import write from './Write'

const AppStackNavigator = createStackNavigator({
  
    board: board,
    toWrite : write,
    
});
  
export default createAppContainer(AppStackNavigator);