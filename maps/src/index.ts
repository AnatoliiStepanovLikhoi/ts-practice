import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './customMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
