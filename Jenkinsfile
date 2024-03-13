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
                        currentBuild.result = 'success'
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