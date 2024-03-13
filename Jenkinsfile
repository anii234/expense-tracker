#!/usr/bin/env
pipeline{
    agent any

    stages{
        stage('buildNumber'){
            steps{
                echo "Build number is ${currentBuild.number}"
            }
            post{
                success{
                    script{
                        currentBuild.Result = 'failed'
                    }
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