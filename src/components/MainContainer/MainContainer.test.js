import { checkTableHeaders } from '../testUtils';
import MainContainer from './index';

test('table headers inside main container', () => {
    checkTableHeaders(<MainContainer />);
});
