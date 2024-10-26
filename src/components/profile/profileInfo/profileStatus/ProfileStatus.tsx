import * as React from 'react';
import {ChangeEvent} from 'react';

type ProfileStatusProps = {
    status: string
    updateUserStatusThunkCreator: (status: string) => void

};

export class ProfileStatus extends React.Component<ProfileStatusProps> {


    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<{}>, snapshot?: any) {
      if (prevProps.status !== this.props.status){
          this.setState({
              status: this.props.status
          })
      }
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatusThunkCreator(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }


    render() {



        return (
            <div>


                {
                    this.state.editMode
                        ? (
                            <div>
                                <input

                                    autoFocus={true}
                                    onBlur={this.deactivateEditMode}
                                    value={this.state.status}
                                    onChange={this.onStatusChange}
                                    type="text"
                                />
                            </div>
                        )
                        : (
                            <div>
                                <span
                                    onDoubleClick={this.activateEditMode}
                                >{this.props.status || '---__---'}</span>
                            </div>
                        )
                }


            </div>
        );
    }
}