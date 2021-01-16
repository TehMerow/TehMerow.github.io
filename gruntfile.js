module.exports = (grunt) =>{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['style/']
                },
                files: {
                    'style/style.css' : 'style/less/style.less'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    
    grunt.registerTask('default', ['less'])
}