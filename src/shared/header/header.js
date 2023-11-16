export class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            humor: 'happy'
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                </div>
            </div>
        );
    }
}