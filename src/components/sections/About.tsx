import { Code2, GraduationCap, Heart, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer with a drive for innovation
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student with a passion for creating innovative web solutions
                that make a real impact. My journey in technology started with curiosity about how
                things work behind the scenes, and it has evolved into a deep love for building
                meaningful digital experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my degree while actively developing modern applications using
                cutting-edge technologies. I believe in writing clean, efficient code and creating
                user-centered designs that solve real-world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">Computer Science Student</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Code2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground">Full-Stack Development</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Goal</h3>
                <p className="text-sm text-muted-foreground">Innovative Solutions</p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">User Experience</p>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Fun Facts About Me
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <span className="text-3xl mb-2 block">🚀</span>
                <p className="text-muted-foreground">Always excited about new tech</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">🎯</span>
                <p className="text-muted-foreground">Detail-oriented problem solver</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">🌱</span>
                <p className="text-muted-foreground">Continuous learner and grower</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">🤝</span>
                <p className="text-muted-foreground">Love collaborating with teams</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">💡</span>
                <p className="text-muted-foreground">Creative solution finder</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">🔥</span>
                <p className="text-muted-foreground">Passionate about clean code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
