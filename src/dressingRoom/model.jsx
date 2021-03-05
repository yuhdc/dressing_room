import React, { Component } from 'react';
import "./model.css";
import { connect } from 'react-redux';

class Model extends Component {
    render() {
        return (
            <div>
                <div className="contain" style={{ backgroundImage: `url(${this.props.model.background})`, backgroundSize: "cover" }}>
                    <div className="body" style={{ backgroundImage: "url(images/allbody/bodynew.png)" }}>
                    </div>
                    <div className="model" style={{ backgroundImage: "url(images/model/1000new.png)" }}>
                    </div>
                    <div className="bikinitop" style={{ backgroundImage: "url(images/allbody/bikini_branew.png)" }}>
                    </div>
                    <div className="bikinibottom" style={{ backgroundImage: "url(images/allbody/bikini_pantsnew.png)" }}>
                    </div>
                    <div className="feetleft" style={{ backgroundImage: "url(images/allbody/feet_high_leftnew.png)" }}>
                    </div>
                    <div className="feetright" style={{ backgroundImage: "url(images/allbody/feet_high_rightnew.png)" }}>
                    </div>

                    <div className="bikinitop" style={{ backgroundImage: `url(${this.props.model.topclothes})`, backgroundSize: "cover" }}>
                    </div>
                    <div className="bikinibottom" style={{ backgroundImage: `url(${this.props.model.botclothes})`, backgroundSize: "cover" }}>
                    </div>
                    <div style={{
                        backgroundImage: `url(${this.props.model.shoes})`, width: "500px",
                        height: "1000px",
                        position: "absolute",
                        bottom: "-39%",
                        right: "-3.5%",
                        transform: "scale(0.5)",
                        zIndex: "1"
                    }}>
                    </div>
                    <div style={{
                        backgroundImage: `url(${this.props.model.hairstyle})`, width: "1000px",
                        height: "1000px",
                        position: "absolute",
                        top: "-75%",
                        right: "-57.5%",
                        transform: "scale(0.15)",
                        zIndex: "4"
                    }}>
                    </div>
                    <div className="body" style={{ backgroundImage: `url(${this.props.model.handbags})`, backgroundSize: "cover" }}>
                    </div>
                    <div className="body" style={{ backgroundImage: `url(${this.props.model.necklaces})`, backgroundSize: "cover", zIndex: "10" }}>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({
    model: state.Model,
});
export default connect(mapStateToProps)(Model);
//(lấy về)(đấy lên)