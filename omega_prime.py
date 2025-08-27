class OmegaPrime:
    def __init__(self, user):
        self.user = user
        self.protocols = [
            # ...existing protocols...
        ]
        self.commands = {
            "review code": self.review_code,
            "optimize": self.optimize,
            "help": self.help,
            "time": self.show_time,
            "date": self.show_time,
            "exit": self.exit,
            "quit": self.exit
        }
        self.greet()

    def greet(self):
        # ...existing code...

    def respond(self, command):
        cmd = command.strip().lower()
        for key in self.commands:
            if key in cmd:
                self.commands[key]()
                return
        print(f"Directive received: '{command}'.")