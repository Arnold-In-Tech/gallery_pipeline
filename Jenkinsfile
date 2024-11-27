pipeline{
    agent any
    tools{
        nodejs 'Node-23'
    }
    environment{
    	SLACK_CHANNEL = '#all-arnoldip1'
        RENDER_URL ='https://gallery_pipeline.onrender.com'
    }
    stages{
        stage('Clone repository'){  //Clone git repo and checkout code on master branch
            steps{
                git branch: 'master', url: 'https://github.com/Arnold-In-Tech/gallery_pipeline'
            }
        }
        stage('Install Dependencies'){  //Install dependencies
            steps{
                sh 'npm install'
            }
        }
        stage('Start server'){     //Start server
            steps{
                // sh 'nohup node server.js &' // run in the background
                sh 'echo "server is started"
            }
        }
        stage('Test'){      //Test listens to started server
            steps{
                sh 'npm run test'
            }
        }
    }
    post{
        //send slack message on success        
        success {
            slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'good',
                message: "Build ${env.BUILD_NUMBER} was successfully deployed to Render\n view application at: ${env.RENDER_URL}"
            )
        }
        //send email on failure        
        failure{
        	emailext attachLog: true, 
        	body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'g16a7782@gmail.com'
        }
    }
}
