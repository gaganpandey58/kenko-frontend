import React,{PureComponent} from 'react';
export class PatientReport extends PureComponent {
  render() {
    return (
      <div>
        <table>

      <tr> 
      <td>Patients's Name:</td>
      <td>Ritee Maharjan</td> 
      </tr>
      <tr> 
      <td>Symptoms:</td>
      <td>Headache</td> 
      </tr>
      <tr> 
      <td>Disease Predicted:</td>
      <td>Typhoid</td> 
      </tr>
      
        </table>
        </div>
    );
  }
}