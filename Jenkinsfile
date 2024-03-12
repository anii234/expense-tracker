#!/usr/bin/env
pipeline{
    agent any

    stages{
        stage('buildNumber'){
            steps{
                echo "Build number is ${currentBuild.number}"
            }
            post{
                sucess{
                    script{
                        currentBuild.result = 'Failure'
                    }
                }
            }
        
    }
    post{
        always{
            echo currentBuild.Result
        }
    }
}
}