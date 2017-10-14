import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

require('react-native-mock/mock');

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(dirtyChai);
