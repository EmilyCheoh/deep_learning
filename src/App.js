import { Bar, Doughnut, Line } from "react-chartjs-2";
import React from "react";
import { Nav, Navbar, Container, Row, Col, Card } from "react-bootstrap";
import TimeSeriesChart from "./components/TimeSeriesChart"
import "./App.css";

const opt = {
    title: {
        display: true,
        text: "Word2vec-based model training results",
        fontSize: 18,
    }
}

const opt2 = {
    title: {
        display: true,
        text: "BERT-based model training results",
        fontSize: 18,
    }
}
const line_graph = {
    labels: ["ACC", "AUC", "PRE", "REC"],
    datasets: [
        {
            label: "TextCNN",
            data: [0.8616, 0.9332, 0.8726, 0.8503],
            fill: false,
            lineTension: 0,
            borderColor: "#DC143C",
        },
        {
            label: "CharCNN",
            data: [0.8379, 0.9176, 0.8383, 0.8381],
            fill: false,
            lineTension: 0,
            borderColor: "#006400",
        },
        {
            label: "LSTM",
            data: [0.8571, 0.9201, 0.8626, 0.8120],
            fill: false,
            lineTension: 0,
            borderColor: "#CD7F32",
        },
        {
            label: "Bi-LSTM",
            data: [0.8451, 0.9064, 0.8975, 0.8029],
            fill: false,
            lineTension: 0,
            borderColor: "#855E42",
        },
        {
            label: "BiLSTM + Attention",
            data: [0.8762, 0.9381, 0.9077, 0.8615],
            fill: false,
            lineTension: 0,
            borderColor: "#FF7F00",
        },
    ],
};

const line_graph_cases = {
    labels: ["ACC", "AUC", "PRE", "REC"],
    datasets: [
        {
            label: "Bi-LSTM",
            data: [0.8841, 0.9293, 0.9257, 0.8592],
            fill: false,
            lineTension: 0,
            borderColor: "#855E42",
        },
        {
            label: "BiLSTM + Attention",
            data: [0.9343, 0.9506, 0.9517, 0.9239],
            fill: false,
            lineTension: 0,
            borderColor: "#FF7F00",
        },
    ],
};

const line_graph_testing = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Number of Tests Conducted Daily",
            data: [4, 5, 7, 10, 9, 10],
            fill: false,
            borderColor: "#006400",
        },
    ],
};

const linegraphunemployment = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Number of Unemployment Claims Filed per Month",
            data: [227789, 218785, 264127, 1004365, 1302154],
            fill: false,
            borderColor: "#00008B",
        },
    ],
};

const bar_graph_cases = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Number of Daily Confirmed Cases",
            data: [1, 3, 6, 10, 20, 36],
            backgroundColor: "#DC143C",
            borderColor: "DC143C",
            borderWidth: 1,
            hoverBackgroundColor: "#CD5C5C",
            hoverBorderColor: "#CD5C5C",
            display: true,
            labelString: "Number of Daily Confirmed Cases",
            lineHeight: 1.2,
            fontColor: "#666",
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            padding: 4,
        },
    ],
};

const bar_graph_testing = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Number of Daily Tests Conducted Daily",
            data: [1, 3, 6, 10, 20, 36],
            backgroundColor: "#006400",
            borderColor: "#006400",
            borderWidth: 1,
            hoverBackgroundColor: "#8FBC8F",
            hoverBorderColor: "#8FBC8F",
            display: true,
            labelString: "Number of Daily Confirmed Cases",
            lineHeight: 1.2,
            fontColor: "#666",
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            padding: 4,
        },
    ],
};

const bargraphunemployment = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Number of Unemployment Claims Filed per Month",
            data: [227789, 218785, 264127, 1004365, 1302154],
            backgroundColor: "#00008B",
            borderColor: "#00008B",
            borderWidth: 1,
            hoverBackgroundColor: "#6495ED",
            hoverBorderColor: "#6495ED",
            display: true,
            labelString: "Number of Cases per Month",
            lineHeight: 1.2,
            fontColor: "#666",
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            padding: 4,
        },
    ],
};

const polarchartall = {
    datasets: [
        {
            data: [10, 20, 30],
            backgroundColor: ["#DC143C", "#006400", "#00008B", "#E7E9ED", "#36A2EB"],
            label: "Effects of Govt Orders in June 2020, IL", // for legend
        },
    ],
    labels: [
        "Total Number of Cases",
        "Total Tests Conducted",
        "Total Unemployment Claims",
    ],
};

const doughnut_chart_all = {
    datasets: [
        {
            data: [10, 20, 30],
            backgroundColor: ["#DC143C", "#006400", "#00008B", "#E7E9ED", "#36A2EB"],
            label: "Effects of Govt Orders in June 2020, IL", // for legend
        },
    ],
    labels: ["Number of Cases", "Tests Conducted", "Unemployment Claims"],
};


var TabName = [
    "Project Overview",
    "Motivation",
    "Methods",
    "Results",
];

var TabData = [
    { name: TabName[0], isActive: true },
    { name: TabName[1], isActive: false },
    { name: TabName[2], isActive: false },
    { name: TabName[3], isActive: false },
];

class MyTabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                {TabData.map(
                    function (tab) {
                        return (
                            <MyTab
                                data={tab}
                                isActive={this.props.activeTab === tab}
                                handleClick={this.props.changeTab.bind(this, tab)}
                            />
                        );
                    }.bind(this)
                )}
            </ul>
        );
    }
}

class MyTab extends React.Component {
    render() {
        return (
            <li
                onClick={this.props.handleClick}
                className={this.props.isActive ? "active" : null}
            >
                <a href="#">{this.props.data.name}</a>
            </li>
        );
    }
}

class TabContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cases: [],
            tested: [],
            date: [],
            daily_confirmed: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/case19', {
            mode: "cors",
        })
            .then(res => res.json())
            .then(
                (result) => {
                    var cases = [], date = [], daily_confirmed = [], tested = [], daily_tested = [];
                    for (var i = 0; i < result.length; i++) {
                        cases.push(result[i].case);
                        date.push(result[i].date.substr(4, 2) + "-" + result[i].date.substr(6, 2));
                        daily_confirmed.push(result[i].positiveIncrease);
                        tested.push(result[i].totalTestResults);
                        daily_tested.push(result[i].totalTestResultsIncrease);
                    }
                    this.setState({
                        isLoaded: true,
                        cases: cases,
                        date: date,
                        tested: tested,
                        daily_confirmed: daily_confirmed,
                        daily_tested: daily_tested,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, cases, date, daily_confirmed, tested, daily_tested } = this.state;
        // line_graph.datasets[0].data = cases;
        // line_graph.datasets[1].data = tested;
        // line_graph.labels = date;
        // line_graph_cases.datasets[0].data = daily_confirmed;
        // line_graph_cases.labels = date;
        bar_graph_cases.datasets[0].data = daily_confirmed;
        bar_graph_cases.labels = date;
        line_graph_testing.labels = date;
        line_graph_testing.datasets[0].data = daily_tested;
        bar_graph_testing.labels = date;
        bar_graph_testing.datasets[0].data = daily_tested;
        doughnut_chart_all.datasets[0].data = [cases[cases.length - 1], tested[tested.length - 1], 2570646];
        return (
            <Container className="content">
                {this.props.activeTab.name === TabName[0] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Project Overview</h2>
                            <p className="panel-body">
                                <p>The prevalence of the internet greatly propagates the amount of user-generated contents. As user-generated contents usually reflect the thinkings of the authors, they contain valuable information that can be helpful to multiple stakeholders. For example, a movie producer might want to know how audiences are reacting to her latest movie by reading through the comments and reviews online. It is reasonable to argue that such an approach is not efficient enough if there are thousands of reviews available, and it is natural to think of whether it is possible to use deep learning techniques to systematically analyze such information on a large scale.</p>
                                <p>Hence, for this project, we propose to test the performance of various deep learning models on predicting sentiments of movie reviews, and we want to focus on short reviews in particular because they are usually hard to train due to the limited length. There has been a lot of research around classifying sentiments of text. In 2002, Peter Turney proposed a simple unsupervised learning algorithm that can classify opinion words as positive or negative with 74% accuracy. The term sentiment analysis first appeared in a 2003 paper by Tetsuya Nasukawa and Jeonghee Yi, where they defined sentiment analysis as to determine how emotions are expressed in the text and whether these expressions indicate  positive or negative opinions on the subject. In 2015, Tai et al. proposed to analyze semantic representations by a serialized LSTM model with added syntactic structure. Their work achieved good results in sentence-level sentiment classification, yet we think there are areas of improvement on their work because the LSTM model only preserves past information. On the other hand, the Bi-LSTM model can preserve both past and future information, and we think this can help to increase accuracy even more. We also want to further explore whether combining models (e.g. Bi-LSTM + Attention) can further improve accuracy of labeling sentiment of short movie review. Therefore, in this project, we construct variations of Bi-LSTM models and compare their performances with other popular NLP models.</p>

                            </p>
                            <center>
                        <div className="vis">
                            <Container fluid>
                                <div className="spacing" />
                                <Line id="line_graph" data={line_graph} options={opt} />

                                <div className="graphspacing" />
                                <Line id="line_graph_cases" data={line_graph_cases} options={opt2} />
                                <div className="graphspacing" />
                            </Container></div>
                        </center>
                        </section>

                        



                    </Container>
                ) : null}
                {this.props.activeTab.name === TabName[1] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Motivation</h2>
                            <p className="panel-body">
                                The prevalence of the internet greatly propagates the amount of user-generated contents. As user-generated contents usually reflect the thinkings of the authors, they contain valuable information that can be helpful to multiple stakeholders. For example, a movie producer might want to know how audiences are reacting to her latest movie by reading through the comments and reviews online. It is reasonable to argue that such an approach is not efficient enough if there are thousands of reviews available, and it is natural to think of whether it is possible to use deep learning techniques to systematically analyze such information on a large scale. Hence, for this project, we propose to test the performance of various deep learning models on predicting sentiments of movie reviews, and we want to focus on short reviews in particular because they are usually hard to train due to the limited length. Another challenge of analyzing short reviews is that they often contain a lot of verbal language and may not be written in standard English grammar.
                            </p>
                        </section>
                        {/* <Container fluid>
                            <div className="spacing" />
                            <TimeSeriesChart type="CASES" />
                            <div className="graphspacing" />
                            <Line data={line_graph_cases} />
                            <div className="graphspacing" />
                            <Bar data={bar_graph_cases} />
                            <div className="graphspacing" />
                        </Container> */}
                    </Container>
                ) : null}
                {this.props.activeTab.name === TabName[2] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Methods</h2>
                            <p className="panel-body">
                                <p>We train our models on the IMDB movie sentiment dataset provided by Maas et al.. The dataset contains 50,000 binary labeled movie reviews for training and testing, with the reviews equally divided into training and testing sets. 50,000 unlabeled data are also included for unsupervised training.</p>
                                <p>We analyze the dataset by examining the distribution of text length. The majority of reviews are within the length of 250 words. As we focus on short movie reviews for the project, we decide to use 200 as the maximum text length to filter out long reviews. We then perform data cleansing for feature construction by decapitalizing all the letters and removing punctuations and stopwords. We also remove words with low frequency because they may be typos and do not carry significant meaning.</p>
                                <p>Below is the distribution of our dataset.</p>
                                <center><img className="body-image" src="https://raw.githubusercontent.com/EmilyCheoh/deep_learning/main/src/data.png" alt="method"></img></center>

                            </p>
                            <p className="panel-body">
                                <p>After the preprocessing is done, we experiment with two different models to generate word embeddings that are later used as the input of our deep learning models. We first use the Word2vec model. We specify to use the Skip-gram method to train, which predicts the word based on relevant context. We choose Skip-gram over CBOW because it is good at representing rare words and has higher accuracy.</p>
                                <p>We also use the BERT model to generate sentence embeddings as it is a relatively new model and is good at resolving polysemy, so we wonder if using word embeddings from the BERT model can improve accuracy. We use the BERT base model with 12 layers. Although it is possible to use the output of any layer as the word embeddings for later use, we find that the output of the 11th layer produces the best results. If we use the output from earlier layers, the model may not be sufficiently trained; if we directly use the output from the last layer, it would be too similar to the original text. </p>
                                <p>We then construct a Bi-LSTM model with 128 neurons for training, with each neuron defining a forward LSTM structure and a reverse LSTM structure. We then concatenate their outputs, and pass it to the next layer of the Bi-LSTM model. </p>
                                <p>To examine whether combining the Attention model with Bi-LSTM can improve accuracy, we pass the result of the last layer of the Bi-LSTM model to an Attention model. We then apply the tanh activation function to the output, multiply it with the weight vector, calculate the softmax, and pass the final result to the fully connected layer.</p>
                                <center><img className="body-image" src="https://raw.githubusercontent.com/EmilyCheoh/deep_learning/main/src/flowchart.png" alt="method"></img></center>

                            </p>
                        </section>

                    </Container>
                ) : null}
                {this.props.activeTab.name === TabName[3] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Results</h2>
                            <p className="panel-body">
                                <p>Because we're performing binary classification, our predicting results belong to one of the following four outcomes: true positive, true negative), false positive, and false negative. Therefore, we measure performance by four metrics: Area under the ROC Curve (AUC), Accuracy (ACC), precision (PRE), and recall (REC). Ideally, we would like to maximize all of the above metrics. </p>

                                <p>We compare both our Word2Vec-based model and BERT-based model against four other commonly used deep learning NLP models such as textCNN and CharCNN, as well as a single directional LSTM model. The results are shown in the following table:</p>
                                <center>
                                    <table className="results">
                                        <tr>
                                            <th>Word2vec-based Models</th>
                                            <th>ACC</th>
                                            <th>AUC</th>
                                            <th>PRE</th>
                                            <th>REC</th>
                                        </tr>
                                        <tr>
                                            <td>TextCNN</td>
                                            <td>0.8616</td>
                                            <td>0.9332</td>
                                            <td>0.8726</td>
                                            <td>0.8503</td>
                                        </tr>
                                        <tr>
                                            <td>CharCNN</td>
                                            <td>0.8379</td>
                                            <td>0.9176</td>
                                            <td>0.8383</td>
                                            <td>0.8381</td>
                                        </tr>
                                        <tr>
                                            <td>LSTM</td>
                                            <td>0.8571</td>
                                            <td>0.9201</td>
                                            <td>0.8626</td>
                                            <td>0.8120</td>
                                        </tr>
                                        <tr>
                                            <td>Bi-LSTM</td>
                                            <td>0.8451</td>
                                            <td>0.9064</td>
                                            <td>0.8975</td>
                                            <td>0.8029</td>
                                        </tr>
                                        <tr>
                                            <td>Bi-LSTM+Attention</td>
                                            <td>0.8762</td>
                                            <td>0.9381</td>
                                            <td>0.9077</td>
                                            <td>0.8615</td>
                                        </tr>

                                    </table>
                                </center>
                                <br></br>
                                <center>
                                    <table className="results">
                                        <tr>
                                            <th>BERT-based Models &nbsp; &nbsp; &nbsp; &nbsp;</th>
                                            <th>ACC</th>
                                            <th>AUC</th>
                                            <th>PRE</th>
                                            <th>REC</th>
                                        </tr>
                                        <tr>
                                            <td>Bi-LSTM</td>
                                            <td>0.8841</td>
                                            <td>0.9293</td>
                                            <td>0.9257</td>
                                            <td>0.8592</td>
                                        </tr>
                                        <tr>
                                            <td>Bi-LSTM+Attention</td>
                                            <td>0.9343</td>
                                            <td>0.9506</td>
                                            <td>0.9517</td>
                                            <td>0.9239</td>
                                        </tr>
                                        <br></br>


                                    </table>
                                </center>
                                <br></br>
                                <p>Below are interactive visualizations of our results. Click on the label to show and hide lines for easier comparison.</p>
                                <center>
                                    <div className="vis">
                                        <Container fluid>
                                            <div className="spacing" />
                                            <Line id="line_graph" data={line_graph} options={opt} />

                                            <div className="graphspacing" />
                                            <Line id="line_graph_cases" data={line_graph_cases} options={opt2} />
                                            <div className="graphspacing" />
                                        </Container>
                                    </div>
                                </center>


                            </p>



                        </section>
                        {/* <Container fluid>

                            <Line data={linegraphunemployment} />
                            <div className="graphspacing" />
                            <Bar data={bargraphunemployment} />
                            <div className="graphspacing" />
                        </Container> */}

                    </Container>
                ) : null}
            </Container>
        );
    }
}


class Navv extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: TabData[0],
        };

        // Bind the handleSelect function already here (not in the render function)
        // this.handleSelect = (tab) => this.setState({ activeTab: tab });
    }

    handleClick = (MyTab) => {
        this.setState({ activeTab: MyTab });
    };

    render() {
        return (
            <Container fluid>
                <MyTabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
                <TabContent activeTab={this.state.activeTab} />
            </Container>
        );
    }
}

function NavDropdownExample() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <Container fluid className="header-image-style">
            {/* <Image className="header-style" src={header_img} fluid /> */}
            <Card className="text-center transparent-0 header-text">
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title className="mainheader-text" as="h1">
                        Testing the Performances of Bi-LSTM + Attention model on Sentiment Analysis
                    </Card.Title>
                    <div className='info'>
                        <Card.Text className="subheader-text" as="h4">
                            Emily Qiao, Jianzhe Xiao
                    </Card.Text>
                        <Card.Text className="subheader-text" as="h4">
                            contact email: emqiao@gmail.com
                    </Card.Text>
                        <Card.Text className="subheader-text" as="h4">
                            Final project for CS 496 Deep Learning, taught by Professor Bryan Pardo
                    </Card.Text>
                        <Card.Text className="subheader-text link" as="h4">
                            <a href="https://github.com/EmilyCheoh/deep_learning/blob/main/final_paper.pdf">Link to final paper</a>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>

            <Container fluid>
                <Navv />
            </Container>
        </Container>
    );
}

const App = () => <NavDropdownExample />;

export default App;
